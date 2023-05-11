package b209.docdoc.server.email.service.Impl;

import java.util.Random;

import javax.mail.Message.RecipientType;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import b209.docdoc.server.email.dto.response.EmailConfirmRes;
import b209.docdoc.server.email.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    JavaMailSender emailSender;

    public static String ePw;

    private MimeMessage createMessage(String to)throws Exception{
        ePw = createKey();
        System.out.println("보내는 대상 : "+ to);
        System.out.println("인증 번호 : "+ePw);
        MimeMessage  message = emailSender.createMimeMessage();

        message.addRecipients(RecipientType.TO, to.trim());//보내는 대상
        message.setSubject("이메일 인증 테스트");//제목

        String msgg="";
        msgg+= "<div style='margin:20px;'>";
        msgg+= "<h1> 안녕하세요 똑똑입니다. </h1>";
        msgg+= "<br>";
        msgg+= "<p>아래 코드를 복사해 입력해주세요<p>";
        msgg+= "<br>";
        msgg+= "<p>감사합니다.<p>";
        msgg+= "<br>";
        msgg+= "<div align='center' style='border:1px solid black; font-family:verdana';>";
        msgg+= "<h3 style='color:blue;'>회원가입 인증 코드입니다.</h3>";
        msgg+= "<div style='font-size:130%'>";
        msgg+= "CODE : <strong>";
        msgg+= ePw+"</strong><div><br/> ";
        msgg+= "</div>";
        message.setText(msgg, "utf-8", "html");//내용
        message.setFrom(new InternetAddress("docdocb209@gmail.com","똑똑 관리자"));//보내는 사람

        return message;
    }

    public static String createKey() {
        StringBuffer key = new StringBuffer();
        Random rnd = new Random();

        for (int i = 0; i < 8; i++) { // 인증코드 8자리
            int index = rnd.nextInt(3); // 0~2 까지 랜덤

            switch (index) {
                case 0:
                    key.append((char) ((int) (rnd.nextInt(26)) + 97));
                    //  a~z  (ex. 1+97=98 => (char)98 = 'b')
                    break;
                case 1:
                    key.append((char) ((int) (rnd.nextInt(26)) + 65));
                    //  A~Z
                    break;
                case 2:
                    key.append((rnd.nextInt(10)));
                    // 0~9
                    break;
            }
        }
        return key.toString();
    }
    @Override
    public EmailConfirmRes sendSimpleMessage(String to)throws Exception {
        // TODO Auto-generated method stub
        MimeMessage message = createMessage(to);
        try{//예외처리
            emailSender.send(message);
        }catch(MailException es){
            es.printStackTrace();
            throw new IllegalArgumentException();
        }
        return EmailConfirmRes.of(ePw);
    }

    private MimeMessage templateMessage(String uuid, String toName, String toEmail, String fromEmail, String templateDeadline)throws Exception{
        System.out.println("보내는 대상 : "+ toEmail);
//        System.out.println("인증 번호 : "+ePw);
        MimeMessage  message = emailSender.createMimeMessage();
        String host = "https://k8b209.p.ssafy.io";
        String uri = host + "/api/template/uuid/" + uuid;

        message.addRecipients(RecipientType.TO, toEmail);//보내는 대상
        message.setSubject("템플릿 전송 테스트");//제목

        String msgg="";
        msgg+= "<div style='margin:20px;'>";
        msgg+= "<h1> 안녕하세요. " + toName + " 님! 똑똑입니다. </h1>";
        msgg+= "<br>";
        msgg+= fromEmail;
        msgg+= "<p> 님이 탬플릿을 공유하였습니다<p>";
        msgg+= "<br>";
        msgg+= "<p> 템플릿 마감일은 " + templateDeadline + " 입니다<p>";
        msgg+= "<br>";
        msgg+= "<p>감사합니다.<p>";
        msgg+= "<br>";
        msgg+= "<div align='center' style='border:1px solid black; font-family:verdana';>";
        msgg+= "<h3 style='color:blue;'>템플릿 접속 링크입니다.</h3>";
        msgg+= "<div style='font-size:130%'>";
        msgg+= "<a href=" + uri + ">템플릿 접속</a><div><br/> ";
        msgg+= "</div>";
        message.setText(msgg, "utf-8", "html");//내용
        message.setFrom(new InternetAddress("docdocb209@gmail.com","똑똑 관리자"));//보내는 사람

        return message;
    }

    @Override
    public String sendTemplateMessage(String uuid, String toName, String toEmail, String fromEmail, String templateDeadline) throws Exception {
        // TODO Auto-generated method stub
        MimeMessage message = templateMessage(uuid, toName, toEmail, fromEmail, templateDeadline);
        try{//예외처리
            emailSender.send(message);
        }catch(MailException es){
            es.printStackTrace();
            throw new IllegalArgumentException();
        }
        return ePw;
    }
}