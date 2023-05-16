package b209.docdoc.server.api.file.service;

import b209.docdoc.server.domain.entity.Imagefile;
import org.springframework.web.multipart.MultipartFile;

public interface ImagefileService {
    Imagefile saveImage(MultipartFile multipartFile);
}
