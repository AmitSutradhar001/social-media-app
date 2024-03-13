- tiny/mce: ==>>

// Real Time Editer: ==>
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import propTypes from "prop-types";

export default function RTE({ name, control, lable, defaultValue = "" }) {
return (

<div className="w-full">
{lable && <label className="inline-block mb-1 pl-1">{lable}</label>}
<Controller
name={name || "content"}
control={control}
render={({ field: { onChange } }) => (
<Editor
apiKey="hvszgi5it0i9izdxf3r89u1071hdukfdh85e20nx7we0vgh5"
initialValue={defaultValue}
init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "print",
              ],
              toolbar:
                "undo redo | blocks | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_style:
                "body {font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
onEditorChange={onChange}
/>
)}
/>
</div>
);
}

RTE.propTypes = {
name: propTypes.string,
control: propTypes.object.isRequired,
lable: propTypes.string,
defaultValue: propTypes.string,
};

- // import parse from "html-react-parser";
