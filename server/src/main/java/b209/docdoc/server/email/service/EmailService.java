package b209.docdoc.server.email.service;

public interface EmailService {
    void sendEmail(String to, String subject, String text);
}

