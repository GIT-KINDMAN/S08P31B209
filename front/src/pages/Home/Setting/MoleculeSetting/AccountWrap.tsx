import { Label } from "@/components/atoms";

import { UserProps } from "../Setting";

import "twin.macro";

const AccountWrap = ({
  email,
  name,
  birth,
  gender,
  address,
  group,
  phone,
  position,
}: UserProps) => {
  return (
    <div className="AccountWrap">
      <div
        className="AccountInfo"
        tw="flex mb-2 p-4 rounded-lg shadow-md overflow-y-auto min-h-[12rem] max-h-[12rem]"
      >
        <div className="Title" tw="text-xl font-bold">
          <Label text="계정 정보" />
        </div>
        <div className="Detail" tw="flex flex-col ml-8 pl-4 border-l-2">
          <ul className="DetailList">
            <li className="DetailListItem" tw="flex pt-1 pb-3">
              <div className="itemKey" tw="w-[4rem] min-w-[4rem] mr-2">
                <label tw="font-bold">이름</label>
              </div>
              <div className="itemValue"> {name}</div>
            </li>
            <li className="DetailListItem" tw="flex pt-1 pb-3">
              <div className="itemKey" tw="min-w-[4rem] mr-2">
                <label tw="font-bold">연락처</label>
              </div>
              <div className="itemValue">{phone}</div>
            </li>
            <li className="DetailListItem" tw="flex pt-1 pb-3">
              <div className="itemKey" tw="min-w-[4rem] mr-2">
                <label tw="font-bold">이메일</label>
              </div>
              <div className="itemValue">{email}</div>
            </li>
            <li className="DetailListItem" tw="flex pt-1 pb-3">
              <div className="itemKey" tw="min-w-[4rem] mr-2">
                <label tw="font-bold">소속</label>
              </div>
              <div className="itemValue">{group}</div>
            </li>
            <li className="DetailListItem" tw="flex pt-1 pb-3">
              {birth ? (
                <div>
                  <div className="itemKey" tw="min-w-[4rem] mr-2">
                    <label tw="font-bold">생일</label>
                  </div>
                  <div className="itemValue">{birth}</div>
                </div>
              ) : null}
            </li>
            <li className="DetailListItem" tw="flex pt-1 pb-3">
              {birth ? (
                <div>
                  <div className="itemKey" tw="min-w-[4rem] mr-2">
                    <label tw="font-bold">성별</label>
                  </div>
                  <div className="itemValue">{gender}</div>
                </div>
              ) : null}
            </li>
            <li className="DetailListItem" tw="flex pt-1 pb-3">
              {birth ? (
                <div>
                  <div className="itemKey" tw="min-w-[4rem] mr-2">
                    <label tw="font-bold">거주지</label>
                  </div>
                  <div className="itemValue">{address}</div>
                </div>
              ) : null}
            </li>
            <li className="DetailListItem" tw="flex pt-1 pb-3">
              {birth ? (
                <div>
                  <div className="itemKey" tw="min-w-[4rem] mr-2">
                    <label tw="font-bold">직책</label>
                  </div>
                  <div className="itemValue">{position}</div>
                </div>
              ) : null}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccountWrap;
