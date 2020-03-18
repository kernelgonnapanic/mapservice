import React, {useState, useEffect} from 'react';

const UseIntersectionObserver = (root = null, rootMargin, threshold = 0) => {
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
        [node, root, rootMargin, threshold])

    return [setNode, ref];
};

export default UseIntersectionObserver;