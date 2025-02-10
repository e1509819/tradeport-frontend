Backend Application

### Create and Activate Virtual Environment

```bash
# Create the Virtual env
python -m venv venv

# Activate the venv
venv\Scripts\activate.bat
```

### Install the Requirements

```bash
pip install -r requirements.txt
```

### Run the Application

```bash
uvicorn main:app --reload
```
