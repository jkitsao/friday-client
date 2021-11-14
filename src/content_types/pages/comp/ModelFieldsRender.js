import React, { useEffect, useState } from "react";
// import axios from "axios";
import api from "../../../api/axios";
import Text from "../../elements/Text";
import Number from "../../elements/Number";
import Date from "../../elements/Date";
import Media from "../../elements/Media";
import RichText from "../../elements/RichText";
import Empty_State from "../../../components/Empty_State";
import Color from "../../elements/Color";
import fields_icon from "../../../assets/icons/fields_icon.png";
import ReactJson from "react-json-view";

function ModelFieldsRender({ model, setRefresh, refresh }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const handleDeleteField = async (field_id) => {
    // alert(JSON.stringify(currentField));
    if (field_id) {
      try {
        const res = await api.post("/models/field/delete", {
          field_id,
          id: model._id,
        });
        setLoading(false);
        setRefresh(!refresh);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }
  };
  return (
    <>
      {model && model.fields.length > 0 && (
        <div className=" lg:flex justify-evenly">
          <div className="lg:w-1/2  bg-gray-50 shadow-md p-5 rounded-md">
            {model?.fields &&
              model.fields.map((field, index) => (
                <div
                  key={index}
                  className="lg:1/2 m-2 shadow-sm"
                  onClick={() => setData(field)}
                >
                  {field.type === "text" && (
                    <Text field={field} handleDeleteField={handleDeleteField} />
                  )}
                  {field.type === "number" && (
                    <Number
                      field={field}
                      handleDeleteField={handleDeleteField}
                    />
                  )}
                  {field.type === "date" && (
                    <Date field={field} handleDeleteField={handleDeleteField} />
                  )}
                  {field.type === "richtext" && (
                    <RichText
                      field={field}
                      handleDeleteField={handleDeleteField}
                    />
                  )}
                  {field.type === "media" && (
                    <Media
                      field={field}
                      handleDeleteField={handleDeleteField}
                    />
                  )}
                  {field.type === "color" && (
                    <Color
                      field={field}
                      handleDeleteField={handleDeleteField}
                    />
                  )}
                </div>
              ))}
          </div>
          <div className=" hidden lg:block lg:w-2/5 mx-2  bg-gray-50 shadow-md p-5 rounded-md">
            {/* {JSON.stringify(data)} */}
            <ReactJson src={data} name={false} enableClipboard={true} />
          </div>
        </div>
      )}
      {model && model.fields.length < 1 && (
        <div className="lg:w-3/4 mx-auto pt-12">
          <Empty_State
            title="Add fields"
            icon={fields_icon}
            description="fields define your content structure.Fields can either be numbers,text,images..."
          />
        </div>
      )}
    </>
  );
}

export default ModelFieldsRender;
