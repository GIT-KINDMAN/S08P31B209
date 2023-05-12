package b209.docdoc.server.file.service;

import b209.docdoc.server.entity.Imagefile;
import org.springframework.web.multipart.MultipartFile;

public interface ImagefileService {
    Imagefile saveImage(MultipartFile multipartFile);
}
