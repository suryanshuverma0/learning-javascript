import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function Functionality({ value }) {
  const [currentCase, setCurrentCase] = useState("lower");
  const [isCopied, setIsCopied] = useState(false);
  const upperCaseButtonBg = "green";
  const upperCaseButtonBgIntensity = 500;
  const lowerCaseButtonBg = "blue";
  const lowerCaseButtonBgIntensity = 500;
  const clearAll = "red";
  const clearAllIntensity = 500;
  const copyToClipboardBg = "orange";
  const copyToClipboardIntensity = 500;

  const [upperCaseValue, setUpperCaseValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [lowerCaseValue, setLowerCaseValue] = useState("");

  const handleUpperCase = () => {
    setIsLoading(true);
    setUpperCaseValue(value.toUpperCase());
    setCurrentCase("upper");
    setIsLoading(false);
  };

  const handleLowerCase = () => {
    setIsLoading(true);
    setLowerCaseValue(value.toLowerCase());
    setCurrentCase("lower");
    setIsLoading(false);
  };

  const handleCopyToClipboard = () => {
    const textToCopy = currentCase === "upper" ? upperCaseValue : lowerCaseValue;
    try {
      navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
    }
  };

  const handleClear = () => {
    setUpperCaseValue("");
    setLowerCaseValue("");
  };

  return (
    <>
      <div>
        <div className="flex justify-around items-center gap-5 bg-slate-200">
          <Button
            label="To UpperCase"
            color={upperCaseButtonBg}
            intensity={upperCaseButtonBgIntensity}
            onClick={handleUpperCase}
            disabled={isLoading}
          />

          <Button
            label="To LowerCase"
            color={lowerCaseButtonBg}
            intensity={lowerCaseButtonBgIntensity}
            onClick={handleLowerCase}
            disabled={isLoading}
          />

          <Button
            label="Copy To Clipboard"
            color={copyToClipboardBg}
            intensity={copyToClipboardIntensity}
            onClick={handleCopyToClipboard}
            disabled={isLoading || !(upperCaseValue || lowerCaseValue)}
          />

          <Button
            label="Clear All"
            color={clearAll}
            intensity={clearAllIntensity}
            onClick={handleClear}
            disabled={isLoading}
          />
        </div>
        <div>
          {isLoading ? (
            <p>Loading....</p>
          ) : (
            <div className="bg-gray-300 text-center text-2xl p-4 w-full h-96">
              {upperCaseValue || lowerCaseValue ? (
                <p>{upperCaseValue || lowerCaseValue}</p>
              ) : (
                <p>Nothing to display</p>
              )}
            </div>
          )}
            {isCopied && <p className="text-green-600 text-2xl">Text copied to Clipboard!</p>}
        </div>
      </div>
    </>
  );
}

Functionality.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Functionality;
