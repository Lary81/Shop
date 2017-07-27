package pl.training.backend.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;
import pl.training.backend.security.entity.User;


   // @Service
    public class MailService {

     //   @Autowired
        private MailSender mailSender;


        public void sendEmail(User user) {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom("gryzipiorka@interia.pl");


            message.setSubject("Wiadomość od :"+user.getNazwa());
            message.setText("Wiadomość testowa");

            mailSender.send(message);
        }

    }

