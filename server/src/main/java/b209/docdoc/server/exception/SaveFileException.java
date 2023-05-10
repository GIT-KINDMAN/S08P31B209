package b209.docdoc.server.exception;

public class SaveFileException extends DocdocServerException{
    public SaveFileException(ErrorCode errorCode) {
        super(errorCode.MAX_UPLOAD_SIZE_EXCEEDED);
    }
}
