export interface TempMail {
    createdAt: {
      miilliseconds: number;
    };
    mail_id: string;
    mail_address_id: string;
    mail_from: string;
    mail_subject: string;
    mail_preview: string;
    mail_text_only: string;
    mail_text: string;
    mail_html: string;
    mail_timestamp: number;
    _id: number;
    mail_attachments_count: number;
    mail_attachments: {
      attachment: string[];
    };
  }
  