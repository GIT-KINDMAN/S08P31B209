package b209.docdoc.server.exception;//package b209.docdoc.server.exception;

public class MemberNotFoundException extends DocdocServerException {
    public MemberNotFoundException(ErrorCode errorCode) {
        super(errorCode.MEMBER_NOT_FOUND);
    }
}
