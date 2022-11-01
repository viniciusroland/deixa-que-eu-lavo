import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = 'DeixaQueEuLavo';
        } else {
            document.title = 'DeixaQueEuLavo';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
