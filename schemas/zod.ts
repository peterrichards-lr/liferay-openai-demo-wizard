import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = {
  blog: z.object({
    blogLanguage: z.string(),
    blogLength: z.string(),
    blogNumber: z.string(),
    blogTopic: z.string().min(3),
    imageGeneration: z.string(),
    imageStyle: z.string(),
    siteId: z.string().min(1),
    viewOptions: z.string(),
  }),
  category: z.object({
    categorytNumber: z.string(),
    childCategorytNumber: z.string(),
    defaultLanguage: z.string(),
    languages: z.array(z.string()),
    manageLanguage: z.boolean(),
    siteId: z.string(),
    vocabularyDescription: z.string(),
    vocabularyName: z.string(),
  }),
  config: z.object({
    authenticationType: z.string(),
    base64data: z.string().optional(),
    clientId: z.string().optional(),
    clientSecret: z.string().optional(),
    login: z.string().optional(),
    model: z.string(),
    openAIKey: z.string(),
    password: z.string().optional(),
    serverURL: z.string(),
  }),
  faq: z.object({
    categoryIds: z.string(),
    defaultLanguage: z.string(),
    faqNumber: z.string(),
    faqTopic: z.string().min(3),
    folderId: z.string(),
    languages: z.array(z.string()),
    manageLanguage: z.boolean(),
    siteId: z.string(),
    structureId: z.string(),
    viewOptions: z.string(),
  }),
  image: z.object({
    imageDescription: z.string(),
    imageFolderId: z.string(),
    imageGeneration: z.string(),
    imageGenerationQuality: z.string(),
    imageGenerationSize: z.string(),
    imageNumber: z.string(),
    imageStyle: z.string().optional(),
  }),
  knowledgeBase: z.object({
    kbArticleLength: z.string(),
    kbArticleNumber: z.string(),
    kbFolderNumber: z.string(),
    kbLanguage: z.string(),
    kbTopic: z.string().min(1),
    siteId: z.string(),
    viewOptions: z.string(),
  }),
  messageBoard: z.object({
    mbLanguage: z.string(),
    mbMessageNumber: z.string(),
    mbSectionNumber: z.string(),
    mbThreadLength: z.string(),
    mbThreadNumber: z.string(),
    mbTopic: z.string(),
    siteId: z.string(),
    viewOptions: z.string(),
  }),
  news: z.object({
    categoryIds: z.string(),
    defaultLanguage: z.string(),
    folderId: z.string(),
    imageFolderId: z.string(),
    imageGeneration: z.string(),
    imageStyle: z.string(),
    languages: z.array(z.string()),
    manageLanguage: z.boolean(),
    newsLength: z.string(),
    newsNumber: z.string(),
    newsTopic: z.string().min(3),
    siteId: z.string(),
    structureId: z.string(),
    viewOptions: z.string(),
  }),
  objects: z.object({
    aiEndpoint: z.string(),
    aiRequest: z.string(),
    aiRole: z.string(),
    objectFields: z.array(
      z.object({
        fieldDescription: z.string(),
        fieldName: z.string(),
        fieldType: z.string(),
      }),
    ),
  }),
  organizations: z.object({
    childOrganizationtNumber: z.string(),
    departmentNumber: z.string(),
    organizationTopic: z.string(),
  }),
  pagesAI: z.object({
    addPageContent: z.boolean(),
    childPageNumber: z.string(),
    pageNumber: z.string(),
    pageTopic: z.string(),
    siteId: z.string(),
  }),
  productsAI: z.object({
    catalogId: z.string().min(0),
    companyTheme: z.string().min(3),
    globalSiteId: z.string().min(1),
    imageGeneration: z.string(),
    imageStyle: z.string(),
    numberOfCategories: z.string(),
    numberOfProducts: z.string(),
    vocabularyName: z.string().min(3),
  }),
  userAI: z.object({
    emailPrefix: z.string(),
    password: z.string(),
    userNumber: z.string(),
  }),
  userGroups: z.object({
    userGroupNumber: z.string(),
    userGroupTopic: z.string(),
  }),
  warehouse: z.object({
    warehouseNumber: z.string(),
    warehouseRegion: z.string(),
  }),
  wiki: z.object({
    siteId: z.string(),
    viewOptions: z.string(),
    wikiArticleLength: z.string(),
    wikiChildPageNumber: z.string(),
    wikiNodeName: z.string(),
    wikiPageNumber: z.string(),
    wikiTopic: z.string(),
  }),
};

export { z, zodResolver };

export default schema;
