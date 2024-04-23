import hashlib
from datetime import datetime
current_datetime = datetime.now()
day = current_datetime.day
hours = current_datetime.hour
min = current_datetime.minute
def format_and_capitalize(text):
    first_20_chars = text[:20]
    capitalized_text = first_20_chars.upper()
    formatted_text = '-'.join([capitalized_text[i:i+5] for i in range(0, len(capitalized_text), 5)])
    return formatted_text

text_to_hash = str(day)
hash_object = hashlib.sha256()
hash_object.update(text_to_hash.encode('utf-8'))
hashed_text = format_and_capitalize(hash_object.hexdigest())
print("admin kay  "+str(day) +" > " + hashed_text+'\n')



for i in range(1, 6):
	text_to_hash = str(day)+""+str(hours)+""+str(min)[0]+""+str(i)
	hash_object = hashlib.sha256()
	hash_object.update(text_to_hash.encode('utf-8'))
	hashed_text = format_and_capitalize(hash_object.hexdigest())
	print("kay " +hashed_text+'\n')

#print('day '+str(day) +' hours '+ str(hours))


