import {VertexAI} from '@google-cloud/vertexai'

async function generateContent(req,res) {

// Initialize Vertex with your Cloud project and location
const vertex_ai = new VertexAI({project: process.env.PROJECT_ID, location: process.env.LOCATION});
const model = process.env.MODEL;

// Instantiate the models
const generativeModel = vertex_ai.preview.getGenerativeModel({
  model: model,
  generationConfig: {
    'maxOutputTokens': 8192,
    'temperature': 1,
    'topP': 0.95,
  },
  safetySettings: [
    {
        'category': 'HARM_CATEGORY_HATE_SPEECH',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    },
    {
        'category': 'HARM_CATEGORY_DANGEROUS_CONTENT',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    },
    {
        'category': 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    },
    {
        'category': 'HARM_CATEGORY_HARASSMENT',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    }
  ],
  systemInstruction: {
    parts: [{"text": "You are a helpful job and skill recommender based on the job they desire to work on.Give detailed guidance to achieve what they desire,by giving the skills required in the job and how to get proficient at it and provide youtube video links at the end for reference."}]
  },
});

const dataset = {
  inlineData: {
    mimeType: 'text/plain',
    data: process.env.FILE_DATA,
  }
};

  const message = req.body.message

  console.log(message)

  const request = {
    contents: [
      {role: 'user', parts: [dataset, {text: message}]}
    ],
  };

  const streamingResp = await generativeModel.generateContent(request);

  res.status(200).json({
    data:streamingResp
  })
}

export default generateContent