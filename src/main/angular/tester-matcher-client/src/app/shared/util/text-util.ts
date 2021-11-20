export class TextUtil {

    public static toStringSet(IDs: Set<string>): string {
        return Array.from(IDs).join(',');
    }
}