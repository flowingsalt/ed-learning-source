import { useEffect } from 'react';

var useDocumentHelper = function useDocumentHelper(title) {
  useEffect(function () {
    document.title = title;
  }, [title]);
};

export default useDocumentHelper;