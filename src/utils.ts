export const transformGlobFiles = (globResult: Record<string, {src:string}>) => {
    const resultMap = Object.fromEntries(
        Object.entries(globResult).map(([path, url]) => [
            path.split("/").pop(),
            url,
        ])
    );

    return (fileName: string) => resultMap[fileName].src;
}