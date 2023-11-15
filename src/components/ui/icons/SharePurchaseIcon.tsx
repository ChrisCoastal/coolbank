import React, { FC } from 'react';

type SharePurchaseIconProps = {
  height?: string;
  width?: string;
  color?: string;
  className?: string;
};

const SharePurchaseIcon: FC<SharePurchaseIconProps> = ({
  height = 24,
  width = 24,
  color = '#000',
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 48 48"
      fill={color}
      className={`svg ${className}`}
      shapeRendering="geometricPrecision"
    >
      <g>
        <path
          d="M23.625,47.63c-0.427,0-0.799-0.142-1.121-0.43c-0.32-0.288-0.48-0.667-0.48-1.136c0-0.227,0.049-0.474,0.146-0.746
	c0.098-0.272,0.246-0.505,0.44-0.701l6.387-6.384l-0.959-0.958l-6.372,6.384c-0.197,0.197-0.417,0.345-0.664,0.439
	c-0.247,0.1-0.498,0.148-0.751,0.148c-0.448,0-0.825-0.155-1.135-0.466c-0.31-0.309-0.466-0.688-0.466-1.136
	c0-0.267,0.056-0.526,0.165-0.781c0.108-0.255,0.247-0.465,0.413-0.632l6.383-6.385l-0.945-0.945l-6.386,6.373
	c-0.173,0.175-0.388,0.315-0.646,0.423c-0.257,0.11-0.515,0.165-0.776,0.165c-0.44,0-0.816-0.157-1.131-0.47
	c-0.313-0.314-0.471-0.691-0.471-1.131c0-0.254,0.051-0.505,0.148-0.75c0.098-0.247,0.246-0.47,0.44-0.664l5.985-5.984l-0.958-0.946
	l-5.973,5.985c-0.166,0.166-0.379,0.305-0.636,0.412c-0.257,0.108-0.522,0.164-0.788,0.164c-0.469,0-0.854-0.15-1.153-0.447
	c-0.298-0.301-0.447-0.686-0.447-1.153c0-0.253,0.047-0.504,0.146-0.75c0.099-0.248,0.246-0.468,0.441-0.664l8.566-8.565
	l3.733,3.743c0.316,0.318,0.676,0.544,1.077,0.678c0.399,0.132,0.807,0.197,1.217,0.197c0.838,0,1.535-0.274,2.093-0.825
	c0.562-0.551,0.841-1.254,0.841-2.109c0-0.403-0.079-0.812-0.232-1.224c-0.156-0.41-0.399-0.782-0.729-1.113l-4.592-4.59
	l1.699-1.701c0.38-0.373,0.84-0.666,1.383-0.879c0.538-0.212,1.079-0.318,1.617-0.318c0.575,0,1.135,0.106,1.681,0.318
	c0.547,0.213,1.016,0.512,1.401,0.899l7.426,7.435c0.364,0.365,0.652,0.81,0.862,1.334c0.214,0.525,0.319,1.105,0.319,1.745
	c0,0.578-0.107,1.123-0.322,1.637c-0.216,0.515-0.502,0.953-0.859,1.31L25.036,47.043c-0.186,0.188-0.406,0.333-0.657,0.435
	C24.129,47.579,23.877,47.63,23.625,47.63z M10.457,34.562l-1.792-1.793c-0.493-0.484-0.863-1.067-1.11-1.748
	c-0.251-0.68-0.374-1.344-0.374-1.994c0-0.683,0.109-1.305,0.333-1.862c0.223-0.559,0.505-1.009,0.85-1.354l6.825-6.836
	c0.374-0.374,0.789-0.668,1.248-0.888c0.458-0.219,0.957-0.329,1.497-0.329c0.579,0,1.113,0.103,1.597,0.308
	c0.486,0.207,0.927,0.509,1.328,0.909l7.217,7.218c0.173,0.175,0.315,0.39,0.424,0.647c0.108,0.259,0.164,0.502,0.164,0.734
	c0,0.461-0.15,0.85-0.454,1.163c-0.303,0.312-0.686,0.469-1.146,0.469c-0.261,0-0.512-0.046-0.752-0.141
	c-0.238-0.096-0.46-0.241-0.664-0.444l-4.632-4.616L10.457,34.562z"
        />
        <path
          d="M22.707,17.72v-1.769c-1.042-0.083-2.022-0.315-2.946-0.696c-0.921-0.382-1.73-0.885-2.423-1.509l1.665-2.413
	c1.095,0.985,2.329,1.595,3.704,1.831v-2.663l-1.29-0.25c-1.346-0.235-2.313-0.651-2.902-1.248c-0.59-0.597-0.885-1.457-0.885-2.581
	c0-0.873,0.201-1.63,0.604-2.268c0.401-0.638,0.983-1.133,1.747-1.488c0.762-0.353,1.669-0.55,2.726-0.593V0.37h1.517v1.769
	c0.86,0.083,1.716,0.26,2.569,0.529c0.855,0.271,1.649,0.628,2.383,1.072l-1.373,2.579c-0.652-0.36-1.272-0.651-1.862-0.874
	c-0.589-0.221-1.161-0.38-1.716-0.479v2.705l1.27,0.208c1.429,0.249,2.472,0.668,3.13,1.258s0.989,1.404,0.989,2.444
	c0,0.86-0.216,1.609-0.646,2.247c-0.431,0.639-1.045,1.142-1.84,1.508c-0.799,0.368-1.766,0.58-2.904,0.635v1.747H22.707z
	 M22.707,7.526V4.842c-0.598,0.028-1.073,0.157-1.426,0.385c-0.355,0.229-0.532,0.538-0.532,0.927c0,0.291,0.056,0.53,0.166,0.718
	c0.112,0.188,0.288,0.329,0.532,0.426c0.242,0.097,0.572,0.167,0.989,0.208L22.707,7.526z M24.224,13.269
	c0.653-0.042,1.172-0.181,1.56-0.417c0.389-0.235,0.584-0.547,0.584-0.936c0-0.277-0.05-0.495-0.146-0.655
	c-0.096-0.16-0.281-0.284-0.552-0.374c-0.271-0.091-0.654-0.171-1.155-0.241l-0.291-0.041V13.269z"
        />
      </g>
    </svg>
  );
};

export default SharePurchaseIcon;
