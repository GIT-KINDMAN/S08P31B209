package b209.docdoc.server.exception;

public class MemberAlreadyExistException extends DocdocServerException {
    public MemberAlreadyExistException(ErrorCode errorCode) {
        super(errorCode.MEMBER_ALREADY_EXIST);
    }
}
