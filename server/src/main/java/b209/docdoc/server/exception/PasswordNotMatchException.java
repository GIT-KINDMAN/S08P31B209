package b209.docdoc.server.exception;//package b209.docdoc.server.exception;

public class PasswordNotMatchException extends DocdocServerException {
    public PasswordNotMatchException(ErrorCode errorCode) {
        super(errorCode.PW_NOT_MATCH);
    }
}
