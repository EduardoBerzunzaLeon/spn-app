CREATE SCHEMA "refunds";
--> statement-breakpoint
CREATE TYPE "public"."error_refund" AS ENUM('RFC no encontrado', 'RFC no encontrado en EPC', 'RFC, plaza no encontrada en EPC');--> statement-breakpoint
CREATE TYPE "public"."type_refund" AS ENUM('cierre_vigencia', 'creacion', 'eliminacion_responsabilidades', 'borrado_otro_consecutivo');--> statement-breakpoint
CREATE TABLE "refunds"."re_logs" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "refunds"."re_logs_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"process_fortnight" char(6) NOT NULL,
	"user_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"consecutive" integer DEFAULT 1 NOT NULL,
	"records_created" integer DEFAULT 0 NOT NULL,
	"records_deleted_responsabilities" integer DEFAULT 0 NOT NULL,
	"records_deleted_employee_concept" integer DEFAULT 0 NOT NULL,
	"records_closed_term" integer DEFAULT 0 NOT NULL,
	"records_succesed" integer DEFAULT 0 NOT NULL,
	"records_failed" integer DEFAULT 0 NOT NULL,
	"has_error" boolean DEFAULT false NOT NULL,
	"active_before" integer DEFAULT 0 NOT NULL,
	"active_after" integer DEFAULT 0 NOT NULL,
	"notes" text DEFAULT '' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "refunds"."re_rfc_failed" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "refunds"."re_rfc_failed_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"refund_logs_id" integer NOT NULL,
	"rfc" char(13) NOT NULL,
	"payment_code" char(23) NOT NULL,
	"type" "type_refund" NOT NULL,
	"error" "error_refund" NOT NULL
);
--> statement-breakpoint
CREATE TABLE "refunds"."re_rfc_success" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "refunds"."re_rfc_success_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"refund_logs_id" integer NOT NULL,
	"rfc" char(13) NOT NULL,
	"payment_code" char(23) NOT NULL,
	"type" "type_refund" NOT NULL
);
--> statement-breakpoint
CREATE TABLE "account" (
	"id" text PRIMARY KEY NOT NULL,
	"account_id" text NOT NULL,
	"provider_id" text NOT NULL,
	"user_id" text NOT NULL,
	"access_token" text,
	"refresh_token" text,
	"id_token" text,
	"access_token_expires_at" timestamp,
	"refresh_token_expires_at" timestamp,
	"scope" text,
	"password" text,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "session" (
	"id" text PRIMARY KEY NOT NULL,
	"expires_at" timestamp NOT NULL,
	"token" text NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL,
	"ip_address" text,
	"user_agent" text,
	"user_id" text NOT NULL,
	CONSTRAINT "session_token_unique" UNIQUE("token")
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"email_verified" boolean NOT NULL,
	"image" text,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL,
	"username" text,
	"display_username" text,
	CONSTRAINT "user_email_unique" UNIQUE("email"),
	CONSTRAINT "user_username_unique" UNIQUE("username")
);
--> statement-breakpoint
CREATE TABLE "verification" (
	"id" text PRIMARY KEY NOT NULL,
	"identifier" text NOT NULL,
	"value" text NOT NULL,
	"expires_at" timestamp NOT NULL,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "refunds"."re_logs" ADD CONSTRAINT "re_logs_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "refunds"."re_rfc_failed" ADD CONSTRAINT "re_rfc_failed_refund_logs_id_re_logs_id_fk" FOREIGN KEY ("refund_logs_id") REFERENCES "refunds"."re_logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "refunds"."re_rfc_success" ADD CONSTRAINT "re_rfc_success_refund_logs_id_re_logs_id_fk" FOREIGN KEY ("refund_logs_id") REFERENCES "refunds"."re_logs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "session" ADD CONSTRAINT "session_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "re_logs_consecutive" ON "refunds"."re_logs" USING btree ("process_fortnight","consecutive");