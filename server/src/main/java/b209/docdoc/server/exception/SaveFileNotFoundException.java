package b209.docdoc.server.exception;

public class SaveFileNotFoundException extends DocdocServerException{
    public SaveFileNotFoundException(ErrorCode errorCode) {
        super(errorCode.FILE_IS_NULL);
    }
}
