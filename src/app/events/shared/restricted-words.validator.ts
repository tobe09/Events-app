import { FormControl } from '@angular/forms';

export function restrictedWords(allRestrictedWords: string[]) {
    return (control: FormControl) => {
        if (!allRestrictedWords) {
            return null;
        }

        const foundRestrictedWords = allRestrictedWords.filter(w => control.value.includes(w));

        return foundRestrictedWords.length > 0 ? {'restrictedWords': foundRestrictedWords.join(', ')} : null;
    };
}