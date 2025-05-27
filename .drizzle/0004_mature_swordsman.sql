ALTER TABLE "refunds"."re_logs" ALTER COLUMN "consecutive" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "refunds"."re_logs" ALTER COLUMN "consecutive" SET DEFAULT 1;--> statement-breakpoint
ALTER TABLE "refunds"."re_logs" ALTER COLUMN "rfc_created" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "refunds"."re_logs" ALTER COLUMN "rfc_deleted_responsabilities" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "refunds"."re_logs" ALTER COLUMN "rfc_deleted_employee_concept" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "refunds"."re_logs" ALTER COLUMN "rfc_closed_term" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "refunds"."re_logs" ALTER COLUMN "rfc_succesed" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "refunds"."re_logs" ALTER COLUMN "rfc_failed" SET DATA TYPE integer;