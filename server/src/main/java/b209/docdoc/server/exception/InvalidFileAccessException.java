package b209.docdoc.server.exception;

public class InvalidFileAccessException extends DocdocServerException{
    public InvalidFileAccessException(ErrorCode errorCode) {
        super(errorCode.FILE_IS_NULL);
    }
}
