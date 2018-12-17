import React from 'react';

const BlastsSvg = () => <svg
    width='600'
    height='800'
    viewBox='0 0 1253 1331'
    className="svg-properties"
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'>
    <defs>
        <circle id='path-1' cx='801' cy='682' r='260'/>
        <filter
            x='-28.8%'
            y='-28.8%'
            width='157.7%'
            height='157.7%'
            filterUnits='objectBoundingBox'
            id='filter-2'>
            <feOffset in='SourceAlpha' result='shadowOffsetOuter1'/>
            <feGaussianBlur
                stdDeviation='50'
                in='shadowOffsetOuter1'
                result='shadowBlurOuter1'/>
            <feColorMatrix
                values='0 0 0 0 0.00784313725 0 0 0 0 0.196078431 0 0 0 0 0.337254902 0 0 0 0.1 0'
                in='shadowBlurOuter1'/>
        </filter>
    </defs>
    <g id='Page-1' fill='none' fillRule='evenodd'>
        <g id='1_Landing' transform='translate(-161 -1005)'>
            <g id='BLAST-RECORDER' transform='translate(149 1005)'>
                <g id='Blasts' transform='translate(12)'>
                    <g id='Group-2'>
                        <g id='Group' transform='translate(352 233)' fillRule='nonzero'>
                            <circle id='Oval-4' stroke='#77064C' strokeWidth='4' cx='449' cy='449' r='320'/>
                            <circle
                                id='Oval-4'
                                stroke='#77064C'
                                strokeWidth='2'
                                opacity='0.2'
                                cx='449'
                                cy='449'
                                r='357'/>
                            <circle id='Oval-4' stroke='#77064C' opacity='0.08' cx='450' cy='450' r='450'/>
                            <ellipse
                                id='Oval-5'
                                fill='#77064C'
                                cx='338.862'
                                cy='748.952'
                                rx='9.862'
                                ry='9.952'/>
                        </g>
                        <path
                            d='M1203,690.499507 C1203,912.79482 1022.79678,1093 800.500991,1093 C578.20719,1093 398,912.79482 398,690.499507 C398,468.204195 578.20719,288 800.500991,288 C1022.79678,288 1203,468.204195 1203,690.499507 Z'
                            id='Stroke-1'
                            stroke='#023256'
                            strokeWidth='4'
                            opacity='0.8'
                            strokeLinecap='round'
                            strokeDasharray='1,45'
                            transform='rotate(90 800.5 690.5)'/>
                        <path
                            d='M799.208333,0.5 L799.208333,1327.5'
                            id='Line-2-Copy-2'
                            stroke='#023256'
                            opacity='0.2'
                            strokeLinecap='square'
                            fillRule='nonzero'/>
                        <circle id='Oval-6' fill='#979797' fillRule='nonzero' cx='799' cy='1327' r='4'/>
                        <path
                            d='M0.5,678.5 L398.5,678.5'
                            id='Line-2-Copy'
                            stroke='#023256'
                            opacity='0.2'
                            strokeLinecap='square'
                            fillRule='nonzero'/>
                    </g>
                    <g id='Oval-4' fillRule='nonzero'>
                        <use fill='#000' filter='url(#filter-2)' xlinkHref='#path-1'/>
                        <use fill='#FFF' xlinkHref='#path-1'/>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>

export default BlastsSvg
