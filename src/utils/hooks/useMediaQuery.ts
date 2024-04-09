// mostly copied from: https://fireship.io/snippets/use-media-query-hook/

import {useLayoutEffect, useState} from "react";

export const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(false);

    useLayoutEffect(() => {
        const media = window.matchMedia(query);
        const handleQueryChange = () => setMatches(media.matches);

        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        window.addEventListener("resize", handleQueryChange);

        return () => window.removeEventListener("resize", handleQueryChange);
    }, [matches, query]);

    return matches;
}
