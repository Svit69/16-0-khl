export class DocumentMetadataService {
  applyLocalizedMetadata(dictionary) {
    document.documentElement.lang = dictionary.code;
    document.title = dictionary.title;
    document.querySelector('meta[name="description"]').content = dictionary.description;
  }
}
