from fastapi import FastAPI, Depends
from typing import List
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

import models
import schemas
import crud
from database import engine, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500" ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/subjects/{subject_id}/questions", response_model=List[schemas.QuestionSchema])
def read_questions_by_subject(subject_id: int, db: Session = Depends(get_db)):
    questions = crud.get_questions_by_subject(db, subject_id)
    return questions