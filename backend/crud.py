from sqlalchemy.orm import Session
import models

def get_questions_by_subject(db:Session, subject_id:int):
    return db.query(models.Question).filter(models.Question.subject_id == subject_id).all()

