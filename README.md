# Query-Chatbot🤖
An intelligent chatbot that allows users to query product and supplier data using natural language. Built with React (frontend), FastAPI (backend), and integrated with OpenAI for data summarization.

## Features

- **Natural Language Queries**: Ask questions like:
  - "Show me all products under brand X"
  - "Which suppliers provide laptops?"
- **Supplier Data Summarization**: Enhanced responses using LLM (OpenAI GPT-3.5/4).
- **Product & Supplier Search**: Query structured data from MySQL/PostgreSQL.
- **Responsive UI**: Modern chat interface with query history panel.
- **REST API**: Fully documented endpoints with Swagger UI.

## Tech Stack

**Backend**  
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)  
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)  
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-100000?style=for-the-badge)  
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)  
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)

**Frontend**  
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)  
![MaterialUI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)  
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

## Installation

### Backend Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/ai-chatbot.git
cd ai-chatbot/chatbot-backend

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env  # Update values in .env
```

### Frontend Setup
```bash
cd ../chatbot-frontend
npm install
```

## Configuration

1. **Database**: Update `.env` with your MySQL/PostgreSQL credentials:
   ```env
   DATABASE_URL=mysql+pymysql://user:password@localhost:3306/chatbot_db
   ```

2. **OpenAI**: Add your API key for LLM features:
   ```env
   OPENAI_API_KEY=your_api_key_here
   ```

3. **Initialize Database**:
   ```sql
   -- Run via MySQL Workbench or CLI
   CREATE DATABASE chatbot_db;
   USE chatbot_db;
   SOURCE database/init.sql;
   ```

## Usage

1. **Start Backend**:
   ```bash
   cd chatbot-backend
   uvicorn app.main:app --reload
   ```

2. **Start Frontend**:
   ```bash
   cd chatbot-frontend
   npm run dev
   ```

3. Access the chatbot at `http://localhost:5173`.

## API Documentation

Interactive documentation available at `http://localhost:8000/docs`:

| Endpoint                | Method | Description                     |
|-------------------------|--------|---------------------------------|
| `/api/v1/products/{brand}` | GET    | Get products by brand          |
| `/api/v1/suppliers/{category}` | GET | Get suppliers by product category |
| `/api/v1/suppliers/{id}/summary` | GET | Get LLM-summarized supplier info |

**Example Response**:
```json
{
  "summary": "Supplier A specializes in Electronics and Laptops. Contact: contact@supplierA.com"
}
```

## Deployment

1. **Frontend**:  
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ai-chatbot)

2. **Backend**:  
   Deploy to [Render](https://render.com) or [AWS EC2](https://aws.amazon.com/ec2/) with:
   ```bash
   docker build -t chatbot-backend .
   ```

3. **Database**: Use [PlanetScale](https://planetscale.com) or [AWS RDS](https://aws.amazon.com/rds/).

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

MIT License - see [LICENSE](https://github.com/KrDevanshu06/query-chatbot?tab=MIT-1-ov-file#)

---

**Need Help?**  
Open an issue or contact [krdevanshu06@rediffmail.com](mailto:krdevanshu06@rediffmail.com)

---

### **Key Features**
- Clear installation instructions
- Badges for tech stack visibility
- API documentation table
- One-click deployment buttons
- Mobile-responsive formatting
- License and contribution guidelines