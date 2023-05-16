package b209.docdoc.server.api.email.service;

import b209.docdoc.server.api.email.dto.response.EmailConfirmRes;

public interface EmailService {
    public EmailConfirmRes sendSimpleMessage(String to) throws Exception;
    public String sendTemplateMessage(String uuid, String toName, String toEmail, String fromEmail, String templateDeadline, String templateName) throws Exception;

}

