ALTER TABLE "refunds"."re_rfc_failed" ADD COLUMN "plaza" char(23) NOT NULL;--> statement-breakpoint
ALTER TABLE "refunds"."re_rfc_success" ADD COLUMN "plaza" char(23) NOT NULL;