import { library } from '@fortawesome/fontawesome-svg-core';
import { faLongArrowLeft, faCheck, faLongArrowRight, faX } from '@fortawesome/free-solid-svg-icons';

// NOTE: Currently cannot use library due to hydration bug
// Import icons directly
// https://github.com/FortAwesome/Font-Awesome/issues/19348

library.add(faLongArrowLeft,
            faLongArrowRight,
            faCheck,
            faX
);

export default library;