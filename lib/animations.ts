export const fadeIn = {  initial: { opacity: 0 },  animate: { opacity: 1 },};

export const slideUp = {  initial: { y: 50, opacity: 0 },  animate: { y: 0, opacity: 1 },};

export const slideDown = {  initial: { y: -50, opacity: 0 },  animate: { y: 0, opacity: 1 },};

export const slideLeft = {  initial: { x: 50, opacity: 0 },  animate: { x: 0, opacity: 1 },};

export const slideRight = {  initial: { x: -50, opacity: 0 },  animate: { x: 0, opacity: 1 },};

export const scaleIn = {  initial: { scale: 0.5, opacity: 0 },  animate: { scale: 1, opacity: 1 },};

export const staggerContainer = {  hidden: { opacity: 1 },  show: {    transition: {      staggerChildren: 0.2,    },  },};

export const staggerItem = {  hidden: { opacity: 0, y: 20 },  show: { opacity: 1, y: 0 },};