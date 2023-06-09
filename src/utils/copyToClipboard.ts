const copyToClipboard = async (text: string | undefined): Promise<void> => {
  if (navigator.clipboard) {
    try {
      // @ts-ignore
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  } else {
    const textarea = document.createElement("textarea");
    // @ts-ignore
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
    document.body.removeChild(textarea);
  }
};

export default copyToClipboard;
