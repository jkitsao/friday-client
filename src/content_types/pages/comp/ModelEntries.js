import React, { useEffect, useState } from "react";
// import axios from "axios";
import api from "../../../api/axios";
import ModelEntriesComp from "./ModelEntriesComp";
import LoadingComp from "../../../components/LoadingComp";
import Empty_State from "../../../components/Empty_State";
import content_icon from "../../../assets/icons/content_icon.png";
function ModelEntries({
  selected,
  content,
  setContent,
  data,
  refresh,
  setRefresh,
  fields,
  loading,
  setLoading,
}) {
  // const [fields, setFields] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const fetchEntries = async () => {
  //   setIsLoading(true);
  //   try {
  //     const res = await api.get("/content", {
  //       params: {
  //         model_name: selected?.name,
  //         project_id: selected?.project_id,
  //       },
  //     });
  //     setFields(res.data.content);
  //     // setContent(res.data.content.content);
  //     setIsLoading(false);
  //   } catch (err) {
  //     setIsLoading(false);
  //     setFields([]);
  //     console.error(err);
  //   }
  // };
  const deleteEntry = async (entryId) => {
    setLoading(true);
    try {
      const res = await api.post("/content/delete", {
        id: entryId,
      });
      setLoading(false);
      setRefresh(!refresh);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };
  // console.log({ fields });
  // console.log({ loading });

  // useEffect(() => {
  //   fetchEntries();
  // }, [selected, refresh]);
  return (
    <div className=" p-5 min-h-screen h-full">
      {/* {JSON.stringify(fields?.content)} */}

      {/* show loading indicator */}
      {loading && (
        <div
          className="w-full flex justify-center items-center"
          style={{
            maxHeight: "70vh",
            height: "50vh",
          }}
        >
          <LoadingComp />
        </div>
      )}
      {/* if fields is not available */}
      {(!loading && !fields < 1) ||
        (fields?.content && fields?.content.length < 1 && (
          <div>
            <Empty_State
              title="Add your first entry"
              description="Entries/content you add will appear here"
              icon={content_icon}
            />
          </div>
        ))}

      {/* show model entries */}
      {!loading && fields.content && fields?.content.length > 0 && (
        <ModelEntriesTable
          fields={fields}
          selected={selected}
          content={content}
          setContent={setContent}
          data={data}
          refresh={refresh}
          setRefresh={setRefresh}
          isLoading={loading}
          deleteEntry={deleteEntry}
        />
      )}
    </div>
  );
}

function ModelEntriesTable({
  fields,
  selected,
  content,
  setContent,
  data,
  refresh,
  setRefresh,
  // isLoading,
  deleteEntry,
}) {
  const contentArray = fields.content && [...fields.content].reverse();
  return (
    <>
      <div className="flex flex-col lg:w-10/12 lg:mx-auto">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className=" overflow-hidden border-b  rounded-t-sm">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-100  border-separate">
                  <tr className="">
                    <th
                      scope="col-3"
                      style={{
                        borderSpacing: "1rem",
                      }}
                      className="px-6 py-3 lg:w-1/3 text-left  text-xs font-medium text-gray-900 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-900 uppercase tracking-wider"
                    >
                      id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-900 uppercase tracking-wider"
                    >
                      model
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                    ></th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  {contentArray.map((field, index) => (
                    <ModelEntriesComp
                      key={index}
                      field={field}
                      model={fields?.model_name}
                      selected={selected}
                      content={content}
                      setContent={setContent}
                      data={data}
                      refresh={refresh}
                      setRefresh={setRefresh}
                      deleteEntry={deleteEntry}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModelEntries;
