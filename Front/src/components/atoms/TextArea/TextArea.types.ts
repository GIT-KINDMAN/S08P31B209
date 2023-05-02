// text : 로그인 및 정보 변경시 text 입력
// number : 생년월일 등등 숫자 입력
// password : 패스워드 입력(비공개)
// edit : 보관함 내 문서명 변경

export interface StyleProps {
  variant?: "email" | "number" | "password" | "edit" | "default";
  isChecked?: boolean;
  capsLockFlag?: boolean;
}

export type InputProps = StyleProps;
