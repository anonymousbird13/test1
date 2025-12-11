export const Calendar = () => {
  return (
    <div className="box-border caret-transparent break-words">
      <div className="box-border caret-transparent break-words overflow-hidden mx-[19px]">
        <div className="relative items-center box-border caret-transparent flex justify-center break-words mt-1.5 mb-[15px] mx-1.5">
          <div className="box-border caret-transparent break-words mx-[5px]">
            <button
              aria-label="Go to previous month"
              type="button"
              className="relative text-zinc-900/60 items-center bg-transparent caret-transparent inline-flex h-[38px] justify-center break-words pointer-events-none text-center w-[38px] z-[1] p-0 rounded-[50%]"
            >
              <span className="box-border caret-transparent block shrink-0 h-5 break-words align-top w-5">
                <img
                  src="https://c.animaapp.com/mj0uvl59C3Od2E/assets/icon-3.svg"
                  alt="Icon"
                  className="box-border caret-transparent"
                />
              </span>
            </button>
          </div>
          <div className="text-base box-border caret-transparent flex justify-center leading-6 break-words w-[125px] mx-[5px]">
            December 2025
          </div>
          <div className="box-border caret-transparent break-words mx-[5px]">
            <button
              aria-label="Go to next month"
              type="button"
              className="relative text-zinc-900/60 items-center bg-transparent caret-transparent inline-flex h-[38px] justify-center break-words pointer-events-none text-center w-[38px] z-[1] p-0 rounded-[50%]"
            >
              <span className="box-border caret-transparent block shrink-0 h-5 break-words align-top w-5">
                <img
                  src="https://c.animaapp.com/mj0uvl59C3Od2E/assets/icon-4.svg"
                  alt="Icon"
                  className="box-border caret-transparent"
                />
              </span>
            </button>
          </div>
        </div>
        <div className="relative box-border caret-transparent min-h-[313px] break-words">
          <table
            aria-label="Select a Day"
            className="caret-transparent break-words table-fixed w-full"
          >
            <thead className="box-border caret-transparent break-words">
              <tr className="box-border caret-transparent break-words align-middle">
                <th className="text-xs box-border caret-transparent leading-3 break-words text-center uppercase align-middle p-0">
                  Mon
                </th>
                <th className="text-xs box-border caret-transparent leading-3 break-words text-center uppercase align-middle p-0">
                  Tue
                </th>
                <th className="text-xs box-border caret-transparent leading-3 break-words text-center uppercase align-middle p-0">
                  Wed
                </th>
                <th className="text-xs box-border caret-transparent leading-3 break-words text-center uppercase align-middle p-0">
                  Thu
                </th>
                <th className="text-xs box-border caret-transparent leading-3 break-words text-center uppercase align-middle p-0">
                  Fri
                </th>
                <th className="text-xs box-border caret-transparent leading-3 break-words text-center uppercase align-middle p-0">
                  Sat
                </th>
                <th className="text-xs box-border caret-transparent leading-3 break-words text-center uppercase align-middle p-0">
                  Sun
                </th>
              </tr>
            </thead>
            <tbody className="box-border caret-transparent break-words">
              <tr className="box-border caret-transparent break-words align-middle">
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Monday, December 1 - No times available"
                    type="button"
                    className="relative text-zinc-900/60 text-base bg-transparent caret-transparent block h-11 leading-6 break-words pointer-events-none text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-700 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      1
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Tuesday, December 2 - No times available"
                    type="button"
                    className="relative text-zinc-900/60 text-base bg-transparent caret-transparent block h-11 leading-6 break-words pointer-events-none text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-700 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      2
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Wednesday, December 3 - No times available"
                    type="button"
                    className="relative text-zinc-900/60 text-base bg-transparent caret-transparent block h-11 leading-6 break-words pointer-events-none text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-700 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      3
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Thursday, December 4 - No times available"
                    type="button"
                    className="relative text-zinc-900/60 text-base bg-transparent caret-transparent block h-11 leading-6 break-words pointer-events-none text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-700 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      4
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Friday, December 5 - No times available"
                    type="button"
                    className="relative text-zinc-900/60 text-base bg-transparent caret-transparent block h-11 leading-6 break-words pointer-events-none text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-700 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      5
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Saturday, December 6 - No times available"
                    type="button"
                    className="relative text-zinc-900/60 text-base bg-transparent caret-transparent block h-11 leading-6 break-words pointer-events-none text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-700 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      6
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Sunday, December 7 - No times available"
                    type="button"
                    className="relative text-zinc-900/60 text-base bg-transparent caret-transparent block h-11 leading-6 break-words pointer-events-none text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-700 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      7
                    </span>
                  </button>
                </td>
              </tr>
              <tr className="box-border caret-transparent break-words align-middle">
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Monday, December 8 - No times available"
                    type="button"
                    className="relative text-zinc-900/60 text-base bg-transparent caret-transparent block h-11 leading-6 break-words pointer-events-none text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-700 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      8
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Tuesday, December 9 - No times available"
                    type="button"
                    className="relative text-zinc-900/60 text-base bg-transparent caret-transparent block h-11 leading-6 break-words pointer-events-none text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-700 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      9
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Wednesday, December 10 - No times available"
                    type="button"
                    className="relative text-zinc-900/60 text-base bg-transparent caret-transparent block h-11 leading-6 break-words pointer-events-none text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-700 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      10
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Thursday, December 11 - Times available"
                    type="button"
                    className="relative text-blue-700 text-base font-bold bg-blue-600/10 caret-transparent block h-11 leading-6 break-words text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-800 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      11
                    </span>
                    <div className="absolute bg-blue-700 box-border caret-transparent h-[5px] break-words translate-x-[-50.0%] translate-y-[-50.0%] w-[5px] mt-[13px] rounded-[50%] left-2/4 top-2/4"></div>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Friday, December 12 - No times available"
                    type="button"
                    className="relative text-zinc-900/60 text-base bg-transparent caret-transparent block h-11 leading-6 break-words pointer-events-none text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-700 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      12
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Saturday, December 13 - No times available"
                    type="button"
                    className="relative text-zinc-900/60 text-base bg-transparent caret-transparent block h-11 leading-6 break-words pointer-events-none text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-700 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      13
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Sunday, December 14 - No times available"
                    type="button"
                    className="relative text-zinc-900/60 text-base bg-transparent caret-transparent block h-11 leading-6 break-words pointer-events-none text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-700 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      14
                    </span>
                  </button>
                </td>
              </tr>
              <tr className="box-border caret-transparent break-words align-middle">
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Monday, December 15 - Times available"
                    type="button"
                    className="relative text-blue-700 text-base font-bold bg-blue-600/10 caret-transparent block h-11 leading-6 break-words text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-800 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      15
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Tuesday, December 16 - Times available"
                    type="button"
                    className="relative text-blue-700 text-base font-bold bg-blue-600/10 caret-transparent block h-11 leading-6 break-words text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-800 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      16
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Wednesday, December 17 - Times available"
                    type="button"
                    className="relative text-blue-700 text-base font-bold bg-blue-600/10 caret-transparent block h-11 leading-6 break-words text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-800 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      17
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Thursday, December 18 - Times available"
                    type="button"
                    className="relative text-blue-700 text-base font-bold bg-blue-600/10 caret-transparent block h-11 leading-6 break-words text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-800 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      18
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Friday, December 19 - No times available"
                    type="button"
                    className="relative text-zinc-900/60 text-base bg-transparent caret-transparent block h-11 leading-6 break-words pointer-events-none text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-700 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      19
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Saturday, December 20 - No times available"
                    type="button"
                    className="relative text-zinc-900/60 text-base bg-transparent caret-transparent block h-11 leading-6 break-words pointer-events-none text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-700 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      20
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Sunday, December 21 - No times available"
                    type="button"
                    className="relative text-zinc-900/60 text-base bg-transparent caret-transparent block h-11 leading-6 break-words pointer-events-none text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-700 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      21
                    </span>
                  </button>
                </td>
              </tr>
              <tr className="box-border caret-transparent break-words align-middle">
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Monday, December 22 - Times available"
                    type="button"
                    className="relative text-blue-700 text-base font-bold bg-blue-600/10 caret-transparent block h-11 leading-6 break-words text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-800 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      22
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Tuesday, December 23 - Times available"
                    type="button"
                    className="relative text-blue-700 text-base font-bold bg-blue-600/10 caret-transparent block h-11 leading-6 break-words text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-800 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      23
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Wednesday, December 24 - Times available"
                    type="button"
                    className="relative text-blue-700 text-base font-bold bg-blue-600/10 caret-transparent block h-11 leading-6 break-words text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-800 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      24
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Thursday, December 25 - Times available"
                    type="button"
                    className="relative text-blue-700 text-base font-bold bg-blue-600/10 caret-transparent block h-11 leading-6 break-words text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-800 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      25
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Friday, December 26 - No times available"
                    type="button"
                    className="relative text-zinc-900/60 text-base bg-transparent caret-transparent block h-11 leading-6 break-words pointer-events-none text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-700 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      26
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Saturday, December 27 - No times available"
                    type="button"
                    className="relative text-zinc-900/60 text-base bg-transparent caret-transparent block h-11 leading-6 break-words pointer-events-none text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-700 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      27
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Sunday, December 28 - No times available"
                    type="button"
                    className="relative text-zinc-900/60 text-base bg-transparent caret-transparent block h-11 leading-6 break-words pointer-events-none text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-700 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      28
                    </span>
                  </button>
                </td>
              </tr>
              <tr className="box-border caret-transparent break-words align-middle">
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Monday, December 29 - Times available"
                    type="button"
                    className="relative text-blue-700 text-base font-bold bg-blue-600/10 caret-transparent block h-11 leading-6 break-words text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-800 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      29
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Tuesday, December 30 - Times available"
                    type="button"
                    className="relative text-blue-700 text-base font-bold bg-blue-600/10 caret-transparent block h-11 leading-6 break-words text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-800 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      30
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                >
                  <button
                    aria-label="Wednesday, December 31 - Times available"
                    type="button"
                    className="relative text-blue-700 text-base font-bold bg-blue-600/10 caret-transparent block h-11 leading-6 break-words text-center w-11 border mx-auto pb-0 px-0 rounded-[50%] border-solid border-transparent hover:text-blue-800 hover:bg-blue-600/20"
                  >
                    <span className="box-border caret-transparent break-words">
                      31
                    </span>
                  </button>
                </td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                ></td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                ></td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                ></td>
                <td
                  role="gridcell"
                  className="box-border caret-transparent break-words align-middle p-0"
                ></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="relative box-border caret-transparent break-words px-8">
        <div className="relative box-border caret-transparent break-words text-left">
          <p className="font-bold box-border caret-transparent leading-[19.6px] break-words">
            Time zone
          </p>
          <div className="box-border caret-transparent max-w-full break-words pt-1.5 pb-[5px] px-[9px] rounded-[18px]">
            <button
              name="Timezone dropdown button"
              role="button"
              type="button"
              className="items-center bg-transparent caret-transparent flex break-words text-center p-0"
            >
              <span className="relative box-border caret-transparent block shrink-0 leading-[14px] break-words mr-3 -top-px font-icomoon before:accent-auto before:box-border before:caret-transparent before:text-sky-950 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[14px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-icomoon"></span>
              <div className="box-border caret-transparent break-words text-ellipsis text-nowrap overflow-hidden">
                Central European Time
              </div>
              <div className="box-border caret-transparent shrink-0 break-words ml-[3px] mr-1">
                (04:05)
              </div>
              <span className="relative text-[8px] box-border caret-transparent block shrink-0 leading-[8px] break-words font-icomoon before:accent-auto before:box-border before:caret-transparent before:text-sky-950 before:text-[8px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[8px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-icomoon"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
