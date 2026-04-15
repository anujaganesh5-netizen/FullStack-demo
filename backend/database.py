from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# DATABASE_URL = "postgresql://postgres:AcademyRootPassword@localhost:5432/Interviewhub"
DATABASE_URL = "postgresql://neondb_owner:npg_d0QCnY6LHfUX@ep-morning-cell-any6ka8e.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require"

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(bind=engine)

Base = declarative_base()



def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
