from pydantic import BaseModel

class QuestionSchema(BaseModel):
    id: int
    subject_id: int
    question: str
    answer: str

    class Config:
        form_attribute = True