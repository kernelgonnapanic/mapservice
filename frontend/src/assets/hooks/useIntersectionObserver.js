import React, {useRef, useState, useEffect} from 'react';

const useIntersectionObserver = (root = null, rootMargin = '0px', threshold = 1.0) => {
    const [entry, updateEntry] = useState({});
    const [node, setNode] = useState(null)

    const observer = useRef(null);

    useEffect(() => {
        if (observer.current) return observer.current.disconnect()



        observer.current = new window.IntersectionObserver(
            ([entry]) =>
                updateEntry(entry),
            {
                root,
                rootMargin,
                threshold
                }
        );


        const { current: currentObserver}  = observer;

        return () => currentObserver.disconnect()

    },
        [node, root, rootMargin, threshold]);

    return [setNode, entry];
};

export default useIntersectionObserver;