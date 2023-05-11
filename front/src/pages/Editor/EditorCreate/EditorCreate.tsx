import { Button, Wrapper } from "@/components/atoms";

import TemplateCreateForm from "./TemplateCreateForm/TemplateCreateForm";
import TemplateLoadForm from "./TemplateLoadForm/TemplateLoadForm";

import "@flaticon/flaticon-uicons/css/all/all.css";
import { ChangeEvent, useState } from "react";
import tw from "twin.macro";

const EditorCreate = () => {
  // 템플릿생성, 템플릿 불러오기
  const [isTemplate, setIsTemplate] = useState(true);

  return (
    <>
      <div className="EditorCreate" tw="flex flex-col w-[40rem] px-4 bg-white">
        <div tw="flex flex-row justify-center py-4">
          <Button
            variant="secondary"
            isBold={true}
            isOutline={true}
            custom={tw`w-full h-full mx-1 py-3`}
            onClick={() => setIsTemplate(true)}
          >
            템플릿 생성하기
          </Button>
          <Button
            variant="secondary"
            isBold={true}
            isOutline={true}
            custom={tw`w-full h-full mx-1`}
            onClick={() => setIsTemplate(false)}
          >
            템플릿 불러오기
          </Button>
        </div>
        {isTemplate === true ? <TemplateCreateForm /> : <TemplateLoadForm />}
      </div>
    </>
  );
};

export default EditorCreate;
