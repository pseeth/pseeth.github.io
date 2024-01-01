import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date'
          },
        ],
      },
      {
        name: "paper",
        label: "Papers",
        path: "content/papers",
        format: "md",
        ui: {
          // Don't allow editors to create new navigation items
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "rich-text",
            name: "info",
            label: "Paper information",
            required: true,
            isBody: true,
          },
        ],
      },
      {
        name: "notebooks",
        label: "Notebooks",
        path: "content/notebooks",
        format: "md",
        ui: {
          // Don't allow editors to create new navigation items
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "rich-text",
            name: "info",
            label: "Notebooks",
            required: true,
            isBody: true,
          },
        ],
      },
      {
        name: "music",
        label: "Music",
        path: "content/music",
        format: "md",
        ui: {
          // Don't allow editors to create new navigation items
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "rich-text",
            name: "info",
            label: "Music",
            required: true,
            isBody: true,
            templates: [
              {
                name: 'soundcloud_track',
                label: 'soundcloud_track',
                match: {
                  start: '{{%',
                  end: '%}}',
                },
                fields: [
                  {
                    name: '_value',
                    label: 'value',
                    type: 'string',
                    required: true,
                  },
                ],
              },
              {
                name: 'soundcloud_playlist',
                label: 'soundcloud_playlist',
                match: {
                  start: '{{%',
                  end: '%}}',
                },
                fields: [
                  {
                    name: '_value',
                    label: 'value',
                    type: 'string',
                    required: true,
                  },
                ],
              }
            ],
          },
        ],
      },
      {
        name: "about",
        label: "About",
        path: "content/about",
        format: "md",
        ui: {
          // Don't allow editors to create new navigation items
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "news",
        label: "News",
        path: "content/news",
        format: "md",
        ui: {
          // Don't allow editors to create new navigation items
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
