import React from "react";

export const IconSearch = ({ color = "#000", width = "18", height = "18" }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.75 1.3C3.70899 1.3 1.3 3.70899 1.3 6.75C1.3 9.79102 3.70899 12.2 6.75 12.2C9.79102 12.2 12.2 9.79102 12.2 6.75C12.2 3.80204 9.78411 1.3 6.75 1.3ZM0 6.75C0 2.99101 2.99101 0 6.75 0C10.5159 0 13.5 3.09796 13.5 6.75C13.5 10.509 10.509 13.5 6.75 13.5C2.99101 13.5 0 10.509 0 6.75Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.6786 10.6025C10.9257 10.3421 11.3371 10.3314 11.5975 10.5786L17.4975 16.1786C17.7579 16.4257 17.7686 16.8371 17.5214 17.0975C17.2743 17.3579 16.8629 17.3686 16.6025 17.1214L10.7025 11.5214C10.4421 11.2743 10.4314 10.8629 10.6786 10.6025Z"
      fill={color}
    />
  </svg>
);

export const IconCheck = ({ color = "#fff", width = "14", height = "14" }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 490 490`}
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill={color} d="M452.253 28.326L197.831 394.674 29.044 256.875 0 292.469l207.253 169.205L490 54.528z">
    </path>
  </svg>
);

export const IconGithub = () => (
  <svg
    height="100" width="100" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
    <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
  </svg>
);


export const IconFavourite = ({ color="currentColor", width = "16", height = "16" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={color} viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
  </svg>
);

