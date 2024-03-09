import React, { useState } from "react";

type Props = {
  sizes: Array<string>;
  changeSize: (option: string) => void;
};

const SizeSelector = (props: Props) => {
  const { sizes, changeSize } = props;
  return (
      <select
        id="sizes"
        className="p-3 rounded-xl text-violet-800"
        onChange={(e) => changeSize(e.currentTarget.value)}
      >
        {sizes.map((data, index) => (
          <option value={data} key={index}>
            {data}
          </option>
        ))}
      </select>
  );
};

export default SizeSelector;
