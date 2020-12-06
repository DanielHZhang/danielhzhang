/* eslint-disable max-len */

type Props = {
  type: 'zhang' | 'hai' | 'yao';
};

export const Hanzi = ({type}: Props): JSX.Element => {
  switch (type) {
    case 'zhang': {
      return (
        <svg viewBox='0 0 1024 1024' width='30rem' height='30rem' fill='#fff'>
          <path
            id='a'
            d='M380 343q27-88 55-113 24-25 0-41-19-13-46-31-19-12-64 13-61 21-109 30-13 0-10 7 1 6 14 13 16 9 92-8 39-12 46 0 7 7-4 44-12 37-27 82c-7 16 50 21 53 4z'
          />
          <path
            id='b'
            d='M243 406q49-16 149-34 10-3 10-12 0-7-22-17c-16-7-37-11-53-4q-3 0-5 2-49 19-89 31c-11 4-1 38 10 34z'
          />
          <path
            id='c'
            d='M305 540q21-1 29 8 10 16 6 56-9 91-32 151-16 40-31 56-10 10-36 0-36-13-64-23-18-7-15 4 3 13 17 27 42 40 66 77 16 22 39 9 72-52 84-120 40-208 43-211 3-6 6-10 12-19 1-29-13-18-45-33-25-12-42-4-22 6-95 25-12 1-15-2-4-4 21-108 1-4 1-7c2-12-2-26-10-34q-10-12-35-24-13-10-22-3-10 7 0 21 19 33 9 85-13 67-42 94-13 13-8 28 7 13 19 21 10 7 29-8 22-22 50-31 46-16 72-15z'
          />
          <path
            id='d'
            d='M724 206q9 27-50 96-27 33-63 68-10 7-14 12-4 10 8 10 45 0 156-101 16-16 28-22 10-7 8-21-1-12-22-37-21-22-37-25-18-1-14 20z'
          />
          <path
            id='e'
            d='M606 494q69-25 262-26 21 0 25-10 4-12-12-24-54-39-113-17-54 12-136 31-28 4-53 11c-28 5-28 5-42 8q-51 9-102 19-19 3-4 19 13 12 32 17 19 4 35-2 18-6 39-11l69-15z'
          />
          <path
            id='f'
            d='M579 459q6-252 14-276 7-18-8-32-22-18-48-24-30-7-40 6-7 10 6 24 36 30 34 310v42q0 291-41 339-12 19 0 40 13 19 31 27 10 7 23-11 18-31 115-135 27-22 28-32 1-7-5-9-6-1-106 71-13 13-16-6 6-138 11-281c1-35 1-35 2-53z'
          />
          <path
            id='g'
            d='M577 512q13 12 24 28 174 234 206 241 69 0 131-14 15-1 20-9 4-6-6-10-156-63-246-150-46-43-100-104c-16-16-48 4-29 18z'
          />
          <path
            d='M380 343q27-88 55-113 24-25 0-41-19-13-46-31-19-12-64 13-61 21-109 30-13 0-10 7 1 6 14 13 16 9 92-8 39-12 46 0 7 7-4 44-12 37-27 82c-7 16 50 21 53 4z'
            // class='median'
            // dataD='1'
            data-median='M216 208L366 181L402 211L338 339'
            // style='--d:1s;animation:0s ease 0s 1 normal none running none;--darkreader-inline-stroke:none;--darkreader-inline-fill:#e8e6e3'
          />
          <path
            d='M243 406q49-16 149-34 10-3 10-12 0-7-22-17c-16-7-37-11-53-4q-3 0-5 2-49 19-89 31c-11 4-1 38 10 34z'
            // class='median'
            // data-d='2'
            data-median='M245 398L325 362L398 361'
            // style='--d:2s;animation:0s ease 0s 1 normal none running none;--darkreader-inline-stroke:none;--darkreader-inline-fill:#e8e6e3'
          />
          <path
            d='M305 540q21-1 29 8 10 16 6 56-9 91-32 151-16 40-31 56-10 10-36 0-36-13-64-23-18-7-15 4 3 13 17 27 42 40 66 77 16 22 39 9 72-52 84-120 40-208 43-211 3-6 6-10 12-19 1-29-13-18-45-33-25-12-42-4-22 6-95 25-12 1-15-2-4-4 21-108 1-4 1-7c2-12-2-26-10-34q-10-12-35-24-13-10-22-3-10 7 0 21 19 33 9 85-13 67-42 94-13 13-8 28 7 13 19 21 10 7 29-8 22-22 50-31 46-16 72-15z'
            // class='median'
            data-d='3'
            data-median='M178 348L215 409L185 553L342 519L381 565L306 833L259 862L169 791'
            // style='--d:3s;animation:0s ease 0s 1 normal none running none;--darkreader-inline-stroke:none;--darkreader-inline-fill:#e8e6e3'
          />
          <path
            d='M724 206q9 27-50 96-27 33-63 68-10 7-14 12-4 10 8 10 45 0 156-101 16-16 28-22 10-7 8-21-1-12-22-37-21-22-37-25-18-1-14 20z'
            // class='median'
            data-d='4'
            data-median='M732 192L757 249L605 386'
            // style='--d:4s;animation:0s ease 0s 1 normal none running none;--darkreader-inline-stroke:none;--darkreader-inline-fill:#e8e6e3'
          />
          <path
            d='M606 494q69-25 262-26 21 0 25-10 4-12-12-24-54-39-113-17-54 12-136 31-28 4-53 11c-28 5-28 5-42 8q-51 9-102 19-19 3-4 19 13 12 32 17 19 4 35-2 18-6 39-11l69-15z'
            // class='median'
            data-d='5'
            data-median='M429 493L481 500L783 441L889 452'
            // style='--d:5s;animation:0s ease 0s 1 normal none running none;--darkreader-inline-stroke:none;--darkreader-inline-fill:#e8e6e3'
          />
          <path
            d='M579 459q6-252 14-276 7-18-8-32-22-18-48-24-30-7-40 6-7 10 6 24 36 30 34 310v42q0 291-41 339-12 19 0 40 13 19 31 27 10 7 23-11 18-31 115-135 27-22 28-32 1-7-5-9-6-1-106 71-13 13-16-6 6-138 11-281c1-35 1-35 2-53z'
            // class='median'
            data-d='6'
            data-median='M499 136L557 181L532 843L558 860L685 734'
            // style='--d:6s;animation:0s ease 0s 1 normal none running none;--darkreader-inline-stroke:none;--darkreader-inline-fill:#e8e6e3'
          />
          <path
            d='M577 512q13 12 24 28 174 234 206 241 69 0 131-14 15-1 20-9 4-6-6-10-156-63-246-150-46-43-100-104c-16-16-48 4-29 18z'
            // class='median'
            data-d='7'
            data-median='M584 505L808 728L951 757'
            // style='--d:7s;animation:0s ease 0s 1 normal none running none;--darkreader-inline-stroke:none;--darkreader-inline-fill:#e8e6e3'
          />
        </svg>
      );
    }
    case 'hai': {
      return (
        <svg viewBox='0 0 1024 1024'>
          <path
            id='a'
            d='M246 189q21 25 43 56 13 16 31 19 13 1 20-13 9-16 3-51-4-30-94-67-16-6-25-4-6 3-6 18 1 13 28 42z'
          />
          <path
            id='b'
            d='M154 358q37 49 74 71 16 4 27-10 7-13 5-31-6-25-24-41-48-33-86-33-4-1-8 1-7 1-5 15 1 13 17 28z'
          />
          <path
            id='c'
            d='M123 710q-12 4-10 22 18 79 52 96 7 7 18 4 7-1 8-27 6-46 102-304 7-16 6-23-1-10-10-3-16 10-126 193-12 21-40 42z'
          />
          <path
            id='d'
            d='M520 214q73-102 74-107-1-3-1-5-4-12-30-34-25-16-43-17-18 1-10 22 15 34-52 144-31 51-75 106-10 10-12 16-4 10 10 8 39-6 119-108c13-17 13-17 20-25z'
          />
          <path
            id='e'
            d='M500 239q48 21 99 11 88-16 179-34 42-10 48-15 10-7 5-17-7-12-37-20-24-6-133 26-82 18-141 24c-11 2-30 21-20 25z'
          />
          <path
            id='f'
            d='M754 751q55 10 109 29 21 7 31 5 10-4 4-22-9-19-55-52-18-16-81-7c-45 1-45 1-68 1q-144-1-272 8-13 1-9-9 36-85 61-147c9-24 9-24 14-36q18-49 29-81 10-37 18-57 3-7 3-12c2-11-9-20-17-28q-34-37-46-29-7 9-8 18 21 54-24 193c-9 26-9 26-13 39q-42 109-85 146-7 7-6 21 4 18 21 37 7 10 22 3 37-18 111-25 85-12 192-4l69 9z'
          />
          <path
            id='g'
            d='M685 742q-18 78-34 105-10 16-32 8-66-19-62-23-31-12-9 18 34 43 59 87 22 31 42 19 79-45 105-205c5-31 5-31 8-47q13-115 18-169c3-32 3-32 5-48q9-90 27-112 19-24 7-36-24-22-61-37-18-9-40-1-49 16-87 25-42 10-110 17c-11 2 6 26 17 28q7 1 13 1 21 0 137-32 21-4 35 4 16 12 3 151c-3 27-3 27-4 40q-12 103-28 170c-6 25-6 25-9 37z'
          />
          <path
            id='h'
            d='M579 416q16 58 38 69 13 4 24-9 6-12 4-33-10-31-53-50-7-4-12 5-4 7-1 18z'
          />
          <path
            id='i'
            d='M780 535q79-3 161 3 19 0 25-8 6-10-10-25-60-45-101-29-33 4-70 11c-39 5-39 5-59 8q-49 4-105 12-64 6-133 14c-30 3-30 3-45 4q-61 4-126 10-21 1-6 18 13 13 30 20 19 6 36 2 25-6 53-11c29-5 29-5 44-7q94-19 248-22h58z'
          />
          <path
            id='j'
            d='M552 608q15 39 38 61 12 6 22-3 7-9 10-22 0-21-11-35-12-15-40-28-12-7-20-7-6 0-6 10-1 10 7 24z'
          />
          <path
            d='M246 189q21 25 43 56 13 16 31 19 13 1 20-13 9-16 3-51-4-30-94-67-16-6-25-4-6 3-6 18 1 13 28 42z'
            // class='median'
            data-d='1'
            data-median='M227 135L302 201L324 260'
            // style='--d:1s;animation:0s ease 0s 1 normal none running none;--darkreader-inline-stroke:none;--darkreader-inline-fill:#e8e6e3'
          />
          <path
            d='M154 358q37 49 74 71 16 4 27-10 7-13 5-31-6-25-24-41-48-33-86-33-4-1-8 1-7 1-5 15 1 13 17 28z'
            // class='median'
            data-d='2'
            data-median='M144 319L250 420'
            // style='--d:2s;animation:0s ease 0s 1 normal none running none;--darkreader-inline-stroke:none;--darkreader-inline-fill:#e8e6e3'
          />
          <path
            d='M123 710q-12 4-10 22 18 79 52 96 7 7 18 4 7-1 8-27 6-46 102-304 7-16 6-23-1-10-10-3-16 10-126 193-12 21-40 42z'
            // class='median'
            data-d='3'
            data-median='M127 729L162 761L292 482'
            // style='--d:3s;animation:0s ease 0s 1 normal none running none;--darkreader-inline-stroke:none;--darkreader-inline-fill:#e8e6e3'
          />
          <path
            d='M520 214q73-102 74-107-1-3-1-5-4-12-30-34-25-16-43-17-18 1-10 22 15 34-52 144-31 51-75 106-10 10-12 16-4 10 10 8 39-6 119-108c13-17 13-17 20-25z'
            // class='median'
            data-d='4'
            data-median='M513 57L551 111L378 340'
            // style='--d:4s;animation:0s ease 0s 1 normal none running none;--darkreader-inline-stroke:none;--darkreader-inline-fill:#e8e6e3'
          />
          <path
            d='M500 239q48 21 99 11 88-16 179-34 42-10 48-15 10-7 5-17-7-12-37-20-24-6-133 26-82 18-141 24c-11 2-30 21-20 25z'
            // class='median'
            data-d='5'
            data-median='M506 235L826 188'
            // style='--d:5s;animation:0s ease 0s 1 normal none running none;--darkreader-inline-stroke:none;--darkreader-inline-fill:#e8e6e3'
          />
          <path
            d='M754 751q55 10 109 29 21 7 31 5 10-4 4-22-9-19-55-52-18-16-81-7c-45 1-45 1-68 1q-144-1-272 8-13 1-9-9 36-85 61-147c9-24 9-24 14-36q18-49 29-81 10-37 18-57 3-7 3-12c2-11-9-20-17-28q-34-37-46-29-7 9-8 18 21 54-24 193c-9 26-9 26-13 39q-42 109-85 146-7 7-6 21 4 18 21 37 7 10 22 3 37-18 111-25 85-12 192-4l69 9z'
            // class='median'
            data-d='6'
            data-median='M478 321L502 391L379 714L390 742L789 728L896 772'
            // style='--d:6s;animation:0s ease 0s 1 normal none running none;--darkreader-inline-stroke:none;--darkreader-inline-fill:#e8e6e3'
          />
          <path
            d='M685 742q-18 78-34 105-10 16-32 8-66-19-62-23-31-12-9 18 34 43 59 87 22 31 42 19 79-45 105-205c5-31 5-31 8-47q13-115 18-169c3-32 3-32 5-48q9-90 27-112 19-24 7-36-24-22-61-37-18-9-40-1-49 16-87 25-42 10-110 17c-11 2 6 26 17 28q7 1 13 1 21 0 137-32 21-4 35 4 16 12 3 151c-3 27-3 27-4 40q-12 103-28 170c-6 25-6 25-9 37z'
            // class='median'
            data-d='7'
            data-median='M529 346L729 320L778 367L727 712L684 863L630 908L548 835'
            // style='--d:7s;animation:0s ease 0s 1 normal none running none;--darkreader-inline-stroke:none;--darkreader-inline-fill:#e8e6e3'
          />
          <path
            d='M579 416q16 58 38 69 13 4 24-9 6-12 4-33-10-31-53-50-7-4-12 5-4 7-1 18z'
            // class='median'
            data-d='8'
            data-median='M586 399L629 481'
            // style='--d:8s;animation:0s ease 0s 1 normal none running none;--darkreader-inline-stroke:none;--darkreader-inline-fill:#e8e6e3'
          />
          <path
            d='M780 535q79-3 161 3 19 0 25-8 6-10-10-25-60-45-101-29-33 4-70 11c-39 5-39 5-59 8q-49 4-105 12-64 6-133 14c-30 3-30 3-45 4q-61 4-126 10-21 1-6 18 13 13 30 20 19 6 36 2 25-6 53-11c29-5 29-5 44-7q94-19 248-22h58z'
            // class='median'
            data-d='9'
            data-median='M312 541L367 553L876 503L963 521'
            // style='--d:9s;animation:0s ease 0s 1 normal none running none;--darkreader-inline-stroke:none;--darkreader-inline-fill:#e8e6e3'
          />
          <path
            d='M552 608q15 39 38 61 12 6 22-3 7-9 10-22 0-21-11-35-12-15-40-28-12-7-20-7-6 0-6 10-1 10 7 24z'
            // class='median'
            data-d='10'
            data-median='M553 584L605 666'
            // style='--d:10s;animation:0s ease 0s 1 normal none running none;--darkreader-inline-stroke:none;--darkreader-inline-fill:#e8e6e3'
          />
        </svg>
      );
    }
    case 'yao': {
      return (
        <svg viewBox='0 0 1024 1024'>
          <path
            id='a'
            d='M495 234q180-61 187-69 7-9 2-17-7-12-39-16-31-3-60 12-55 27-112 50c-27 10-27 10-40 15q-79 25-167 44-37 10-8 24 46 21 100 1 46-16 96-31c27-9 27-9 41-13z'
          />
          <path
            id='b'
            d='M569 390q147 139 266 146h4q22-7 12-36-13-31-26-180-1-12-7-13-4 0-7 13-9 39-17 75-10 49-27 51-19 3-64-20-46-22-93-62c-23-21-23-21-34-32q-48-48-81-98c-15-27-15-27-22-40q-27-45-24-95 0-19-41-32-40-10-51-4-10 7-1 22 27 19 46 61 15 33 31 63c14 25 14 25 21 38q48 73 85 111c20 21 20 21 30 32z'
          />
          <path
            id='c'
            d='M610 364q52-40 90-53 10-4 12-18 1-12-12-40-15-25-30-31-16-6-17 15-1 28-19 45-28 25-58 50c-25 17-25 17-37 26q-118 72-195 108-12 4-15 9-7 7 5 10 39 10 235-95c27-17 27-17 41-26z'
          />
          <path
            id='d'
            d='M552 554q67-7 122-13 12 1 22-12 1-13-23-25-39-22-108-3-177 33-340 52-31 3-7 22 36 31 66 23 36-7 78-14c23-4 23-4 34-6q51-10 111-17c30-5 30-5 45-7z'
          />
          <path
            id='e'
            d='M362 584q-1 1 0 6 6 139-193 294-4 3-9 7-7 7-1 10 27 10 114-51 79-51 139-179 12-19 25-40 7-9 3-19-13-24-44-34c-11-4-34-6-34 6z'
          />
          <path
            id='f'
            d='M507 561q21 39 17 96-6 156 21 194 7 9 18 18 57 42 246 35 87-4 121-22 31-16 17-49-21-52-35-143-3-16-11-20-7-4-11 16-7 112-23 134-31 34-159 35-70-3-100-14-27-13-32-32-21-54 2-149 3-24 11-38 13-39-37-68c-12-9-52-7-45 7z'
          />
          <path
            d='M495 234q180-61 187-69 7-9 2-17-7-12-39-16-31-3-60 12-55 27-112 50c-27 10-27 10-40 15q-79 25-167 44-37 10-8 24 46 21 100 1 46-16 96-31c27-9 27-9 41-13z'
            // class='median'
            data-d='1'
            data-median='M252 264L337 260L681 154'
            // style='--d:1s;animation:0s ease 0s 1 normal none running none;--darkreader-inline-stroke:none;--darkreader-inline-fill:#e8e6e3'
          />
          <path
            d='M569 390q147 139 266 146h4q22-7 12-36-13-31-26-180-1-12-7-13-4 0-7 13-9 39-17 75-10 49-27 51-19 3-64-20-46-22-93-62c-23-21-23-21-34-32q-48-48-81-98c-15-27-15-27-22-40q-27-45-24-95 0-19-41-32-40-10-51-4-10 7-1 22 27 19 46 61 15 33 31 63c14 25 14 25 21 38q48 73 85 111c20 21 20 21 30 32z'
            // class='median'
            data-d='2'
            data-median='M356 72L417 104L456 208L531 317L715 465L819 480L820 316'
            // style='--d:2s;animation:0s ease 0s 1 normal none running none;--darkreader-inline-stroke:none;--darkreader-inline-fill:#e8e6e3'
          />
          <path
            d='M610 364q52-40 90-53 10-4 12-18 1-12-12-40-15-25-30-31-16-6-17 15-1 28-19 45-28 25-58 50c-25 17-25 17-37 26q-118 72-195 108-12 4-15 9-7 7 5 10 39 10 235-95c27-17 27-17 41-26z'
            // class='median'
            data-d='3'
            data-median='M664 224L670 292L549 377L334 478'
            // style='--d:3s;animation:0s ease 0s 1 normal none running none;--darkreader-inline-stroke:none;--darkreader-inline-fill:#e8e6e3'
          />
          <path
            d='M552 554q67-7 122-13 12 1 22-12 1-13-23-25-39-22-108-3-177 33-340 52-31 3-7 22 36 31 66 23 36-7 78-14c23-4 23-4 34-6q51-10 111-17c30-5 30-5 45-7z'
            // class='median'
            data-d='4'
            data-median='M213 560L268 574L598 521L691 527'
            // style='--d:4s;animation:0s ease 0s 1 normal none running none;--darkreader-inline-stroke:none;--darkreader-inline-fill:#e8e6e3'
          />
          <path
            d='M362 584q-1 1 0 6 6 139-193 294-4 3-9 7-7 7-1 10 27 10 114-51 79-51 139-179 12-19 25-40 7-9 3-19-13-24-44-34c-11-4-34-6-34 6z'
            // class='median'
            data-d='5'
            data-median='M369 593L399 632L338 748L270 826L163 896'
            // style='--d:5s;animation:0s ease 0s 1 normal none running none;--darkreader-inline-stroke:none;--darkreader-inline-fill:#e8e6e3'
          />
          <path
            d='M507 561q21 39 17 96-6 156 21 194 7 9 18 18 57 42 246 35 87-4 121-22 31-16 17-49-21-52-35-143-3-16-11-20-7-4-11 16-7 112-23 134-31 34-159 35-70-3-100-14-27-13-32-32-21-54 2-149 3-24 11-38 13-39-37-68c-12-9-52-7-45 7z'
            // class='median'
            data-d='6'
            data-median='M516 562L557 608L554 816L600 863L768 879L888 856L911 834L901 677'
            // style='--d:6s;animation:0s ease 0s 1 normal none running none;--darkreader-inline-stroke:none;--darkreader-inline-fill:#e8e6e3'
          />
        </svg>
      );
    }
    default: {
      throw new Error('Bad type');
    }
  }
};
