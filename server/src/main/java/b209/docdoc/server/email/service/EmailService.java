package b209.docdoc.server.email.service;

public interface EmailService {
    public String sendSimpleMessage(String to) throws Exception;
    public String sendTemplateMessage(String uuid, String toName, String toEmail, String fromEmail, String templateDeadline) throws Exception;

}

