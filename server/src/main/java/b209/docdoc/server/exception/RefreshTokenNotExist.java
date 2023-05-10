package b209.docdoc.server.exception;

public class RefreshTokenNotExist extends DocdocServerException {
    public RefreshTokenNotExist(ErrorCode errorCode) {
        super(ErrorCode.REFRESH_TOKEN_NOT_FOUND);
    }
}
