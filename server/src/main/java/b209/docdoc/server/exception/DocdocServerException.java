package b209.docdoc.server.exception;

import lombok.Getter;

@Getter
public class DocdocServerException extends RuntimeException {
    private ErrorCode errorCode;

    public DocdocServerException(ErrorCode errorCode) {
        this.errorCode = errorCode;
    }


}
